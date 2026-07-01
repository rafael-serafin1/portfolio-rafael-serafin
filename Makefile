#!/make

init:
	npm run dev

deploy:
	npm run build
	npm run deploy

generic:
	git add .
	git commit -m "atribuição genérica, commit enviado automaticamente"
	git push
	git fetch