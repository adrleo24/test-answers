function getUniqueNumber (items) {
    const unique = []
    items.forEach(item => {
        if(!unique.includes(item)){
            unique.push(item)
        }
    })
    return unique
}