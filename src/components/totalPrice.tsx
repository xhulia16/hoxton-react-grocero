//@ts-ignore
function TotalPrice({calculateTotal}){
    return(
        <div>
          <span className="total-number">£{calculateTotal()}</span>
        </div>
    )
}
export default TotalPrice