[![GitHub license][license-image]][license-url]
[![build][build-image]][build-url]

# Firebase Authentication

Demo Link: https://andy6804tw.github.io/Firebase-Authentication-Demo/public/index.html

## 功能(Feature)

1. 會員註冊
2. 會員登入
3. 忘記密碼
4. FB 第三方登入
5. Google-mail 第三方登入

### 註冊(Register)
使用者註冊有三種方式，使用第三方註冊時用戶要給予同意授權，FB 用戶若要登出或更換帳號請清除瀏覽器中的 cookie。

> Note1: 禁止重複信箱註冊以及第三方已註冊的信箱不得再使用信箱密碼註冊

> Note2: 由目前為開發測試階段故 FB 登入目前不對外開放，僅內部開發者得以測試。 

- 使用信箱密碼註冊
- FB 第三方註冊
- Google-mail 第三方註冊

![img](./screenshot/img01.png)

### 登入(Login)
使用者登入

- 使用信箱密碼登入
- FB 第三方登入
- Google-mail 第三方登入

```json
信箱: root@gmail.com
密碼: password
```

![img](./screenshot/img02.png)

### 忘記密碼(Forget)
在登入頁面點選忘記密碼，輸入用戶當時註冊的信箱後送出後即可至信箱內收取更改密碼的信件，修改完畢後即可使用新密碼登入。

![img](./screenshot/img03.png)


## 其他(another)
登入成功後前端會得到一串 idToken 也就是所謂的 JWT，前端開發者必須拿取此 token 放置 Header 中的 Authorization，才得以進行 API 存取。

**Example:**

```
GET /api/product HTTP/1.1
Host: localhost:3008
Authorization: eyJhbGciOiJSUzI1NiIsImtpZCI6ImY4ZWFhOWYzODFiNTFiYzc4MmJjOTExMTljNjA2M2E1MGVlMzk4MmYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcXVhcG5pLWF1dGgiLCJhdWQiOiJxdWFwbmktYXV0aCIsImF1dGhfdGltZSI6MTUxOTk3MjA1MSwidXNlcl9pZCI6IlFvWmd3TmpYWUpQY1Z3akNndjRCUDJtTlNvYzIiLCJzdWIiOiJRb1pnd05qWFlKUGNWd2pDZ3Y0QlAybU5Tb2MyIiwiaWF0IjoxNTE5OTcyMDUxLCJleHAiOjE1MTk5NzU2NTEsImVtYWlsIjoicm9vdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicm9vdEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.V4dxjZU_lf7yyYYQNJO4mhFykZzR0-W6L7ELNMYwmOAJV_mpnKl-aWd2lZSGK-P4fWb4rNczqqkdz5obHVmnc-Va7t7XOceYevtxZID6Eihg2zcXom8nyyNvTjzzf9DG493NbMO6eJH-qH6E96LZr0SXKA-EBViOUDYR2ugrHGB95cinSh_ZDCFHaETtSLRo487A1-zDJd4g6W0FI9l2zYbpe56VE88JRCX1msc3thwPfLVxu2I7Dsd88-3xX2UJTia4OQPBFMH2cdMEcHxBXdS4Bfdevaeuv0AAoVVvU4Y9Cl3fyHl-FKRjlqYTrOlIaJ4E4_l0GUYsxMhVe-Wxxg
```

> Note: 此 Token 具有一小時的時效性。

![img](./screenshot/img04.png)

![img](./screenshot/img05.png)

## LICENSE
#### MIT

[license-image]: https://img.shields.io/npm/l/express.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com
[license-url]: https://github.com/andy6804tw/imgur-module/blob/master/LICENSE
[build-image]:https://img.shields.io/badge/build-demo-brightgreen.svg
[build-url]:https://andy6804tw.github.io/Firebase-Authentication-Demo/public/index.html
