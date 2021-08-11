let myMap;


ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.753597, 37.605639],
        zoom: 15,
        //controls: [],
        
    });

    const myPlacemark = new ymaps.Placemark([55.751216, 37.606026], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/icon/all/point.svg',
        iconImageSize: [58, 72],
      //  iconImageOffset: [0, 0]
    });
    
    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark); 
}

