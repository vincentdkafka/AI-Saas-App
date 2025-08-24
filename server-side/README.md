# AI SaaS App - Server Side

## Free/Premium Usage System

This server implements a tiered usage system for AI services with free and premium plans.

### Features

- **Free Plan**: 10 AI generations per user
- **Premium Plan**: Unlimited AI generations
- **Usage Tracking**: Automatic tracking of user usage via Clerk metadata
- **Rate Limiting**: Prevents abuse of free tier

### Environment Variables Required

Create a `.env` file in the server-side directory with:

```env
# Database Configuration
DATABASE_URL=your_neon_database_connection_string_here

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration
PORT=3000

# Clerk Configuration (if needed)
CLERK_SECRET_KEY=your_clerk_secret_key_here
```

### API Endpoints

#### POST `/api/ai/generate-article`
Generate an AI article with usage tracking.

**Request Body:**
```json
{
  "prompt": "Write about artificial intelligence",
  "length": 500
}
```

**Response:**
```json
{
  "success": true,
  "content": "Generated article content...",
  "usage": {
    "plan": "free",
    "remaining": 9
  }
}
```

#### GET `/api/ai/usage-stats`
Get current usage statistics for the authenticated user.

**Response:**
```json
{
  "success": true,
  "stats": {
    "plan": "free",
    "freeUsage": 1,
    "maxFreeUsage": 10,
    "remaining": 9,
    "isUnlimited": false
  }
}
```

### Usage System Logic

1. **Authentication**: All requests require Clerk authentication
2. **Plan Check**: Middleware checks user's plan from Clerk metadata
3. **Usage Validation**: Free users are limited to 10 generations
4. **Usage Increment**: Usage count is incremented before AI generation
5. **Database Storage**: All generations are stored in the database

### Database Schema

The system expects a `creations` table with:
- `user_id`: User identifier
- `prompt`: User's input prompt
- `content`: Generated AI content
- `type`: Type of generation (e.g., 'article')

### Clerk Metadata Structure

**Public Metadata:**
```json
{
  "plan": "pro_ver" // or undefined for free users
}
```

**Private Metadata:**
```json
{
  "free_usage": 5 // Current usage count for free users
}
```

### Error Handling

- **403**: Usage limit exceeded
- **401**: Authentication failed
- **500**: Server error

### Running the Server

```bash
npm install
npm run server  # Development with nodemon
npm start       # Production
```
