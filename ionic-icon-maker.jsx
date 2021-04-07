//批量制作icon.jsx
app.preferences.rulerUnits = Units.PIXELS
app.preferences.typeUnits = TypeUnits.PIXELS

// app.openDialog ("", null, true)

var data =
{
    "icon": [
        { "w": 72, "h": 72, "dir": "resources/android/icon/", "fileName": "drawable-hdpi-icon.png" },
        { "w": 36, "h": 36, "dir": "resources/android/icon/", "fileName": "drawable-ldpi-icon.png" },
        { "w": 48, "h": 48, "dir": "resources/android/icon/", "fileName": "drawable-mdpi-icon.png" },
        { "w": 96, "h": 96, "dir": "resources/android/icon/", "fileName": "drawable-xhdpi-icon.png" },
        { "w": 144, "h": 144, "dir": "resources/android/icon/", "fileName": "drawable-xxhdpi-icon.png" },
        { "w": 192, "h": 192, "dir": "resources/android/icon/", "fileName": "drawable-xxxhdpi-icon.png" },
        { "w": 1024, "h": 1024, "dir": "resources/", "fileName": "icon.png" },
        { "w": 1024, "h": 1024, "dir": "resources/ios/icon/", "fileName": "icon-1024.png" },
        { "w": 40, "h": 40, "dir": "resources/ios/icon/", "fileName": "icon-40.png" },
        { "w": 80, "h": 80, "dir": "resources/ios/icon/", "fileName": "icon-40@2x.png" },
        { "w": 120, "h": 120, "dir": "resources/ios/icon/", "fileName": "icon-40@3x.png" },
        { "w": 50, "h": 50, "dir": "resources/ios/icon/", "fileName": "icon-50.png" },
        { "w": 100, "h": 100, "dir": "resources/ios/icon/", "fileName": "icon-50@2x.png" },
        { "w": 60, "h": 60, "dir": "resources/ios/icon/", "fileName": "icon-60.png" },
        { "w": 120, "h": 120, "dir": "resources/ios/icon/", "fileName": "icon-60@2x.png" },
        { "w": 180, "h": 180, "dir": "resources/ios/icon/", "fileName": "icon-60@3x.png" },
        { "w": 72, "h": 72, "dir": "resources/ios/icon/", "fileName": "icon-72.png" },
        { "w": 144, "h": 144, "dir": "resources/ios/icon/", "fileName": "icon-72@2x.png" },
        { "w": 76, "h": 76, "dir": "resources/ios/icon/", "fileName": "icon-76.png" },
        { "w": 152, "h": 152, "dir": "resources/ios/icon/", "fileName": "icon-76@2x.png" },
        { "w": 167, "h": 167, "dir": "resources/ios/icon/", "fileName": "icon-83.5@2x.png" },
        { "w": 29, "h": 29, "dir": "resources/ios/icon/", "fileName": "icon-small.png" },
        { "w": 58, "h": 58, "dir": "resources/ios/icon/", "fileName": "icon-small@2x.png" },
        { "w": 87, "h": 87, "dir": "resources/ios/icon/", "fileName": "icon-small@3x.png" },
        { "w": 57, "h": 57, "dir": "resources/ios/icon/", "fileName": "icon.png" },
        { "w": 114, "h": 114, "dir": "resources/ios/icon/", "fileName": "icon@2x.png" }]
    , "screen": [
        { "w": 800, "h": 480, "dir": "resources/android/splash/", "fileName": "drawable-land-hdpi-screen.png" },
        { "w": 320, "h": 200, "dir": "resources/android/splash/", "fileName": "drawable-land-ldpi-screen.png" },
        { "w": 480, "h": 320, "dir": "resources/android/splash/", "fileName": "drawable-land-mdpi-screen.png" },
        { "w": 1280, "h": 720, "dir": "resources/android/splash/", "fileName": "drawable-land-xhdpi-screen.png" },
        { "w": 1600, "h": 960, "dir": "resources/android/splash/", "fileName": "drawable-land-xxhdpi-screen.png" },
        { "w": 1920, "h": 1280, "dir": "resources/android/splash/", "fileName": "drawable-land-xxxhdpi-screen.png" },
        { "w": 480, "h": 800, "dir": "resources/android/splash/", "fileName": "drawable-port-hdpi-screen.png" },
        { "w": 200, "h": 320, "dir": "resources/android/splash/", "fileName": "drawable-port-ldpi-screen.png" },
        { "w": 320, "h": 480, "dir": "resources/android/splash/", "fileName": "drawable-port-mdpi-screen.png" },
        { "w": 720, "h": 1280, "dir": "resources/android/splash/", "fileName": "drawable-port-xhdpi-screen.png" },
        { "w": 960, "h": 1600, "dir": "resources/android/splash/", "fileName": "drawable-port-xxhdpi-screen.png" },
        { "w": 1280, "h": 1920, "dir": "resources/android/splash/", "fileName": "drawable-port-xxxhdpi-screen.png" },
        { "w": 640, "h": 1136, "dir": "resources/ios/splash/", "fileName": "Default-568h@2x~iphone.png" },
        { "w": 750, "h": 1334, "dir": "resources/ios/splash/", "fileName": "Default-667h.png" },
        { "w": 1242, "h": 2208, "dir": "resources/ios/splash/", "fileName": "Default-736h.png" },
        { "w": 2208, "h": 1242, "dir": "resources/ios/splash/", "fileName": "Default-Landscape-736h.png" },
        { "w": 2048, "h": 1536, "dir": "resources/ios/splash/", "fileName": "Default-Landscape@2x~ipad.png" },
        { "w": 2732, "h": 2048, "dir": "resources/ios/splash/", "fileName": "Default-Landscape@~ipadpro.png" },
        { "w": 1024, "h": 768, "dir": "resources/ios/splash/", "fileName": "Default-Landscape~ipad.png" },
        { "w": 1536, "h": 2048, "dir": "resources/ios/splash/", "fileName": "Default-Portrait@2x~ipad.png" },
        { "w": 2048, "h": 2732, "dir": "resources/ios/splash/", "fileName": "Default-Portrait@~ipadpro.png" },
        { "w": 768, "h": 1024, "dir": "resources/ios/splash/", "fileName": "Default-Portrait~ipad.png" },
        { "w": 640, "h": 960, "dir": "resources/ios/splash/", "fileName": "Default@2x~iphone.png" },
        { "w": 2732, "h": 2732, "dir": "resources/ios/splash/", "fileName": "Default@2x~universal~anyany.png" },
        { "w": 320, "h": 480, "dir": "resources/ios/splash/", "fileName": "Default~iphone.png" },
        { "w": 2732, "h": 2732, "dir": "resources/", "fileName": "splash.png" }]
}

var testing = false;
var outPutDir, iconDoc, screenFile;
if (testing) {
    var root = "~/Desktop/"
    outPutDir = File(root + "out/")
    iconDoc = File(root + "icon.png")
    screenFile = File(root + "icon.png")

} else {
    iconDoc = new File(File.openDialog("选择icon ", "*.*", true))

    outPutDir = Folder(iconDoc.parent.fullName+"/output/")
    // outPutDir = Folder.selectDialog("请选择输出文件夹")
}



var iconDocument=app.open(iconDoc)
makeImageByJson(outPutDir, data.icon)

var screenDocument=createScreen(app.activeDocument)
iconDocument.close(SaveOptions.DONOTSAVECHANGES);
makeImageByJson(outPutDir, data.screen)
screenDocument.close(SaveOptions.DONOTSAVECHANGES);

outPutDir.execute()
function makeImageByJson(dir, json) {
    for (var i = 0; i < json.length; i++) {
        var item = json[i];
        $.writeln("w:" + item.w + "h:" + item.h + "fileName:" + item.fileName)
        resizeImage(dir + "/" + item.dir, item.fileName, item.w, item.h);
    }
}

function resizeImage(dir, fileName, w, h) {
    var doc = app.activeDocument;


    //必须要剪掉一点否则就没有选区了
    selectRectangle(doc, 1, 1, app.activeDocument.width - 2, app.activeDocument.height - 2)
    var scale = (w * 100.0) / app.activeDocument.width
    doc.selection.resize(scale, scale, AnchorPosition.MIDDLECENTER);
    doc.resizeCanvas(w, h);


    var folder=new Folder(dir)
    if(!folder.exists){
        folder.create()
    }
    var thePNGFile = new File(dir + fileName);

    var options = new PNGSaveOptions()
    doc.saveAs(thePNGFile, options, true, Extension.LOWERCASE);


    var history = doc.historyStates.length - 3;

    doc.activeHistoryState = doc.historyStates[history];

    // app.purge(PurgeTarget.HISTORYCACHES);
}

//选择矩形
function selectRectangle(doc, x, y, w, h) {
    if (h == null) {
        h = w;
    }
    var selRegion = Array(Array(x, y), Array(x + w, y), Array(x + w, y + h), Array(x, y + h), Array(x, y));
    // doc.selection.select(selRegion);
    doc.selection.selectAll()
}
// 使用图标制作启动页
function createScreen(iconDoc){


    // 拷贝icon
    iconDoc.selection.selectAll()
    iconDoc.selection.copy()
    
    // Create a new 2x4 inch document and assign it to a variable 
    var docRef = app.documents.add( 3096, 3096 )
    docRef.selection.selectAll()
    var fillColor = new SolidColor() 
    fillColor.rgb.red = 75
    fillColor.rgb.green = 22
    fillColor.rgb.blue = 35
    docRef.selection.fill(fillColor)
    
    
    
    docRef.paste()

    return docRef
}