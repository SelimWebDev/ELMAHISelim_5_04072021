async function main (){
    var reponseReq = await reqGetAll()
    buildAndWriteHtmlIndex(reponseReq)
}

main()



