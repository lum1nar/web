TypeScript workflow

1. 建立 tsconfig.json
```bash
tsc --init
```

2. 建立 package.json
```bash 
#package.json
{
    "scripts": {
        "dev": "tsc --watch"
    }
}

```

3. 建立 index.ts

4. 執行 npm run dev
- 或者 tsc index.ts
- 將 .ts 編譯成 .js

5. 執行 node index.js
