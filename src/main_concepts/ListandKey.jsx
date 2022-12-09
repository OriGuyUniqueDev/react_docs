
function List() {
    const num = [1,2,3,4,5,6,7,8,9]
    const triple = num.map((num,index) => <li key={index}>{num * 3}</li>)

    return (
        // auto loop the array and display inside the ul > li
        <ul>{triple}</ul>
    )
    
}

export default List