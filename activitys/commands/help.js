function helperfn()
{
    console.log(`list of all the commands
    node mycli.js view <dirname> flat
    node mycli.js view <dirname> tree
    node mycli.js organize <dirname>
    node mycli.js organize
    node mycli.js help
    `);
}

//nodejs->export

module.exports={
    fn:helperfn
}