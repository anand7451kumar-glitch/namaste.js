//let a = 20;
//{
    //var a = 20; //illegal shadowing
//}
const a = 20;
{
    const a = 100;
    {
    console.log(a);
    }
}