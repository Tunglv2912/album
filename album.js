new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/21.jpg",
          img2: "images/22.png",
          img3: "images/23.jpg",
          title: "COUPLE",
          isOpen: false,
        },
        {
          img1: "images/31.png",
          img2: "images/32.jpg",
          img3: "images/33.jpg",
          title: "COUPLE",
          isOpen: false,
        },
        {
          img1: "images/41.jpg",
          img2: "images/42.jpg",
          img3: "images/43.jpg",
          title: "COUPLE",
          isOpen: false,
        },
        {
          img1: "images/51.jpg",
          img2: "images/52.jpg",
          img3: "images/53.png",
          title: "COUPLE",
          isOpen: false,
        },
        {
          img1: "images/11.jpg",
          img2: "images/12.jfif",
          img3: "images/13.jpg",
          title: "COUPLE",
          isOpen: false,
        },
        {
          img1: "images/61.jpg",
          img2: "images/62.jpg",
          img3: "images/63.jpg",
          title: "COUPLE",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
