## Installation and Setup

Before running this application, install [Node.js](https://nodejs.org/en/download/) and create a `.env` file in both the frontend and backend directories.

### Backend

Navigate to `./personal-website/backend` and copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set the following values in `.env`:

```env
FRONTEND_URL=http://localhost:3000/
EMAIL_ADDRESS_FROM=your-sending-gmail-address
EMAIL_ADDRESS_TO=where-messages-should-be-delivered
EMAIL_KEY=your-gmail-app-password
```

Then install dependencies and start the server:

```bash
npm install
npm start
```

The backend listens on `PORT` (default `3001`). Override it in `.env` if needed.

### Frontend

Navigate to `./personal-website/frontend` and copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Verify (or set) the backend URL:

```env
NEXT_PUBLIC_BACKEND_URL="http://localhost:3001/"
```

Install dependencies and start:

```bash
npm install
npm run dev
```

Visit http://localhost:3000 in any web browser.

### Run both from the repo root

```bash
npm run install-all   # installs frontend + backend
npm run dev           # runs both concurrently in development
```
