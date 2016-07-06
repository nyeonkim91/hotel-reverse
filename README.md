# Hotel Reverse

## Synopsis

 대한민국 1등 호텔 역경매 서비스

## Motivation

 호텔 룸은 비행기 표와 유사하게 재고가 남지 않는 상품입니다. 따라서 호텔 입장에서는 룸이 남을 경우 싼 가격에라도 룸을 처분하는 것이 이익입니다.
 
 또한, 호텔을 이용하고자 하는 고객은 호텔 룸의 가용성이나 가격에 대한 충분한 정보가 없어 일일이 호텔에 전화를 하고 가격을 문의하는 수고를 하거나, 귀차니즘에 아무 호텔이나 선택을 하곤 하였습니다.
 
 저희는 이런 문제점을 해소하기 위해, 호텔 이용객이 가격과 사양을 제시하면 호텔이 그 제안을 수용할 것인지를 결정하는 역경매 시스템을 제공하고자 합니다. 그런 의미에서 Hotel Reverse 서비스는 시쳇말로 누이 좋고 매부 좋은, 상호 윈-윈하는 서비스가 될 것임을 확신합니다.

## Requirements

- node 6.x
- npm 3.x
- mysql 5.6.x
- react-native rc 0.27.x
- angular2 rc 2.0.x
- express 4.x
- sequelizer 3.x

## Installation

- client
```
 in the root driectory, cd HotelAndroid
 npm install
```
- server
```
in the root directory, cd server
npm install
after that, cd admin
npm install
then, cd ../manager
npm install
```

## Usage
 - Client
   * download '호텔리버스' app at Google Playstore
 - Admin
   * http://
 - Hotel Manager
   * http://
 

## Basic Structure

 - HotelAndroid/
   * react-native client source modules
 - server/
   * src/
     - config/ : helper functions
     - controllers/ : processing requests(get, post, put, delete)
     - db/ : house keepings for database
     - server.js : server setup
   * admin/ : angular2 modules for system administrator
   * manager/ : angular 2 modules for hotel managers
   * specs/ : test routines

## TO-DO List



## Contributing

Contributors may send PULL REQUESTS to this repo.
