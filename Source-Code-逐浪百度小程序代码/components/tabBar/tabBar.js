const app = getApp();
// 自定义组件js
Component({
    properties: {
        check_idx: { // 属性名
            type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: 0, // 属性初始值（必填）
        }
    },

    data: {
        color: "#999999",
        selectedColor: "#1695ef",
        counter_num:0,
        list: [
            {   
                id:0,
                pagePath: "/pages/index/index",
                iconPath: "/images/icon_index.png",
                selectedIconPath: "/images/icon_index_hl.png",
                text: "雅赏",
                check:0
            },
            {
                id:1,
                pagePath: "/pages/news/news",
                iconPath: "/images/icon_news.png",
                selectedIconPath: "/images/icon_news_hl.png",
                text: "技巧",
                check:0
            },
            {
                id:2,
                pagePath: "/pages/introduce/introduce",
                iconPath: "/images/icon_product.png",
                selectedIconPath: "/images/icon_product_hl.png",
                text: "软件",
                check:0
            },
            {
                id:3,
                pagePath: "/pages/content/upload",
                iconPath: "/images/icon_contact.png",
                selectedIconPath: "/images/icon_contact_hl.png",
                text: "Hi",
                check:0
            }
        ]
    }, 

 
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
        const that = this;
        this.get_mid()
        this.init()
    },

    ready:function(){
        
    },

    detached: function () {

    },

    methods: {
        tapHandle:function(res){
            swan.redirectTo({
                url: res.currentTarget.dataset.url,
            });
        },
        get_mid:function(){
            const that = this;
            // console.log(app.globalData.userInfo)
            if(!app.globalData.userInfo){
                setTimeout(that.get_mid.bind(that), 800);                    
            }else{
                if(app.globalData.userInfo.mid){
                    that.methods.sum_counter.bind(that)() 
                    swan.hideLoading();
                }else{
                    setTimeout(that.get_mid.bind(that), 800);
                }
            }
        },
        init(){
            let e = this.data.check_idx;
            let data = this.data.list;
            data.map(e=>{
                if(e.id == this.data.check_idx){
                    e.check = 1
                }else{
                    e.check = 0
                }
            })
            // console.log(data)
            this.setData({
                list:data
            })
        },
    
    }
});