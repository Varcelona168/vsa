function Buyurtma(price, name) {
    
    let soni = prompt(`Nechta ${name} zakaz qilasiz ?`)
    let zakaz = confirm(`Sizning ${soni}-ta ${name}ingiz ${soni*price} so'm bo'ldi
        rostan ham zakaz berasizmi?
        `)



        if (zakaz) {
           alert(`sizning buyurtmangiz qabul qilindi tez orada yetib boradi`) 
        }else{
            alert(`so'r butdan 😡`)
        }
}