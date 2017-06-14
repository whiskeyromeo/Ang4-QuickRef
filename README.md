### Angular Setup

To separate JS and TS files:


In tsconfig.json, add:
```
	"outDir": "dist"
```

In systemjs.config.js, change :
```
	map ={
	 	"app": "app"
	}
```

to 

```
	map ={
		"app" : "dist/app"
	}
```

In index.html, change the src path for main.js to reflect the new file structure
