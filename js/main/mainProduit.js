async function main (){
    var reponseReq = await reqGetOneId();
    console.log(reponseReq);
    buildAndWriteHtmlProduit(reponseReq);
}

main()



