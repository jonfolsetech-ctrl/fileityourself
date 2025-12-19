#!/bin/bash

echo "🔧 FileItYourself Setup Script"
echo "================================"
echo ""

# Check if .env exists
if [ -f .env ]; then
    echo "✅ .env file already exists"
else
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    
    # Generate a secure NextAuth secret
    echo "🔐 Generating secure NEXTAUTH_SECRET..."
    SECRET=$(openssl rand -base64 32)
    
    # Update the .env file with the generated secret
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s|NEXTAUTH_SECRET=.*|NEXTAUTH_SECRET=$SECRET|g" .env
    else
        # Linux
        sed -i "s|NEXTAUTH_SECRET=.*|NEXTAUTH_SECRET=$SECRET|g" .env
    fi
    
    echo "✅ .env file created with secure secret"
fi

# Ensure data directory exists
if [ ! -d "data" ]; then
    echo "📁 Creating data directory..."
    mkdir -p data
fi

# Ensure users.json exists
if [ ! -f "data/users.json" ]; then
    echo "📄 Creating users.json file..."
    echo "[]" > data/users.json
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Admin Credentials (Development):"
echo "   Email: admin@fileityourself.com"
echo "   Password: FileItAdmin2025!"
echo ""
echo "⚠️  IMPORTANT: Change these credentials in production!"
echo ""
echo "🚀 Next steps:"
echo "   1. Review .env file and add your Stripe keys"
echo "   2. Run: npm install"
echo "   3. Run: npm run dev"
echo "   4. Visit: http://localhost:3000/login"
echo ""
