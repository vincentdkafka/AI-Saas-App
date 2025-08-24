import { clerkClient } from "@clerk/express";

export class UsageTracker {
  static async checkUsageLimit(userId, plan, currentUsage) {
    if (plan === "pro_ver") {
      return { canUse: true, remaining: -1 }; // Unlimited for pro users
    }
    
    const maxFreeUsage = 10;
    const remaining = maxFreeUsage - currentUsage;
    
    return {
      canUse: remaining > 0,
      remaining: Math.max(0, remaining)
    };
  }

  static async incrementUsage(userId) {
    try {
      const user = await clerkClient.users.getUser(userId);
      const currentUsage = user.privateMetadata?.free_usage || 0;
      
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: currentUsage + 1
        }
      });
      
      return currentUsage + 1;
    } catch (error) {
      console.error("Error incrementing usage:", error);
      throw new Error("Failed to update usage count");
    }
  }

  static async getUsageStats(userId) {
    try {
      const user = await clerkClient.users.getUser(userId);
      const plan = user.publicMetadata?.plan || "free";
      const freeUsage = user.privateMetadata?.free_usage || 0;
      
      return {
        plan,
        freeUsage,
        maxFreeUsage: 10,
        remaining: plan === "pro_ver" ? -1 : Math.max(0, 10 - freeUsage),
        isUnlimited: plan === "pro_ver"
      };
    } catch (error) {
      console.error("Error getting usage stats:", error);
      throw new Error("Failed to get usage statistics");
    }
  }
}
