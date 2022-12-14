
axios.get('http://47.99.66.125:9090/info').then(({data}) => {
    if(data) render(data)
    else render(getDataFromStorage())
})
function render(data) {
    if(!data) return
    data.forEach(item => {
        // 动态创建元素
        let div = document.createElement("div")
        // 这里可以添加类名修改样式

        div.innerHTML = `<p>曲名: ${item.Username}</p>
            <p>作者: ${item.Author}</p>
            <p>所属专辑: ${item.Album}</p>
            <p>专辑位置: ${item.Place}</p>
            <p>发布年份: ${item.Date}</p>
            <a href="../source/${item.Username}">查看专辑</a>
        `
        div.className = "item"

        $(".main-cont")[0].appendChild(div)
    });
}

function getDataFromStorage() {
    let dataArray = []
    let dataStorage = JSON.parse(localStorage.getItem('item'))
    if (!dataStorage) {
        return null
    }
    console.log('dataStorage', dataStorage)
    for (let i = 0; i < dataStorage.length / 5; i++) {
        dataArray.push({
            Username: dataStorage[5 * i],
            Author: dataStorage[5 * i + 1],
            Album: dataStorage[5 * i + 2],
            Place: dataStorage[5 * i + 3],
            Date: dataStorage[5 * i + 4],
        })
    }
    return dataArray
}