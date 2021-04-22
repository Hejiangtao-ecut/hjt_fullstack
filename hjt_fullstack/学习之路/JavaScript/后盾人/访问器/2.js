const web = {
    name: "",
    url: "",
    get site() {
        return `${this.name}的网址：${this.url}`
    },
    set site(value) {
        [this.name,this.url] = value.split(',')
    }
}

console.log(web.site);
web.site = '百度,www.baidu.com';
console.log(web.site);