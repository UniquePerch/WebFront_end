let dataArray = []
let dataStorage = JSON.parse(localStorage.getItem('item'))
axios.get('http://47.99.66.125:9090/info').then(({data}) => {
    render(data)
})
function render(data) {
    let items = document.querySelectorAll('.item')
    items.forEach(item => {
        item.remove()
    })
    data.forEach(item => {
        // 动态创建元素
        let div = document.createElement("div")
        // 这里可以添加类名修改样式
        div.innerHTML = `<p>曲名: ${item.Username}</p>
            <p class="author">作者: ${item.Author}</p>
            <p>所属专辑: ${item.Album}</p>
            <p>专辑位置: ${item.Place}</p>
            <p>发布年份: ${item.Date}</p>
            <a href="http://47.99.66.125:9090/source/${item.Username}">查看专辑</a>
            <div class="delete" onclick=delByAuthor("${item.Author}")>×</div>
        `
        div.className = "item"

        $(".main-cont")[0].appendChild(div)
    });
}
function delByAuthor(author) {
    if(!author) return
    console.log('author', author)
    axios.delete(`http://47.99.66.125:9090/info/${author}`).then(({data}) => {
        render(data)
    })
}