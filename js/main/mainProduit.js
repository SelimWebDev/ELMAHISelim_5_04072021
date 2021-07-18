async function main (){
    var reponseReq = await reqGetOneId()
    buildAndWriteHtmlProduit(reponseReq)
}

main()



