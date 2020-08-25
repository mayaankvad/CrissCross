# CrissCross Server

CrissCross Server 

## Install 

    npm install

### Development

Add the .env file 

    MODE=DEVELOP
    MONGO_SRV=<YOUR-MONGO-SRV>
    DB_NAME=CrissCross
    IOS_GOOGLE_CLIENT_ID=<YOUR-IOS-CLIENT>
    ANDROID_GOOGLE_CLIENT_ID=<YOUR-ANDROID-CLIENT>

To run the development server use `npm run dev `

### Production 

Add the .env file 

    MODE=PRODUCTION
    MONGO_SRV=<YOUR-MONGO-SRV>
    DB_NAME=CrissCross
    IOS_GOOGLE_CLIENT_ID=<YOUR-IOS-CLIENT>
    ANDROID_GOOGLE_CLIENT_ID=<YOUR-ANDROID-CLIENT>
    REDIS_HOST=<YOUR-REDIS-HOST>
    REDIS_PORT=<YOUR-REDIS-PORT>

To run the production server use `npm start `


Production starts as many clusters as your CPU can handle and uses Redis to maintain socket connections over all clusters and instances.

The real production system works with docker but starting it manually is fine too. 

## Todo 
- stress testing
- docker