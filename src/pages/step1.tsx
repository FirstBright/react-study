import Image from "next/image"
function MyButton() {
    return (
        <button className='font-bold bg-stone-300 rounded-lg border border-stone-700 p-3'>
            I'm a button
        </button>
    )
}
export default function MyApp() {
    const temp = {
        name: "test",
        color: "red",
        profileImage: "/favicon.ico",
    }
    const isShow = false
    const products = [
        { title: "Cabbage", isFruit: false, id: 1 },
        { title: "Garlic", isFruit: false, id: 2 },
        { title: "Apple", isFruit: true, id: 3 },
    ]
    const listItems = products.map((product) => (
        <li key={product.id}>{product.title}</li>
    ))
    const handleClick = () => {
        console.log("click!")
    }
    const ck = () => {
        console.log("ck")
    }
    return (
        <div>
            <p onClick={handleClick}>Click!!!</p>
            <p>index</p>
            <p>
                <span>My name is </span>
                <span>{temp.name}</span>
            </p>
            <p>
                <span>color: </span>
                <span>{temp.color}</span>
            </p>
            {isShow === false ? (
                <p>
                    <div className='w-4 h-4 relative'>
                        <Image src={temp.profileImage} alt='' fill />
                    </div>
                    <MyButton />
                    {listItems}
                </p>
            ) : null}
        </div>
    )
}
