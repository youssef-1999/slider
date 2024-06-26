var imgs=Array.from(document.querySelectorAll('.test img'))
var main_Box=document.querySelector('#light_Box .main_image')
var light_Box=document.querySelector('#light_Box')
var globalIndex

var leftBtn=document.querySelector('.left')
var rightBtn=document.querySelector('.right')
var closeBtn=document.querySelector('.close')

for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener('click',function(e)
    {
        index=e.target
        targetIndex=imgs.indexOf(index)
        globalIndex=targetIndex

        targetSrc=e.target.getAttribute('src')


        light_Box.classList.replace('d-none','d-flex')
        main_Box.style.backgroundImage=`url(${targetSrc})`
    })
}

closeBtn.addEventListener('click',function(e)
{
    closeImage()
})
rightBtn.addEventListener('click',function(e)
{
    nextImg()
})
leftBtn.addEventListener('click',function(e)
{
    prevImg()
})
document.addEventListener('click',function(e)
{
    if(e.target.id=='light_Box')
    {
        closeImage()
    }
})

document.addEventListener('keydown',function(e)
{console.log(e);
    if(e.key== "ArrowRight")
        {
            nextImg()
        }
    if(e.key== "ArrowLeft")
        {
            prevImg()
        }
    if(e.key== "Escape")
        {
            closeImage()
        }
})

function closeImage()
{
    light_Box.classList.replace('d-flex','d-none')

}

function nextImg()
{
    globalIndex++
    if(globalIndex>=imgs.length)
    {
        globalIndex=globalIndex-imgs.length
    }
    main_Box.style.backgroundImage=`url(${imgs[globalIndex].getAttribute('src')})`

}
function prevImg()
{
    globalIndex--
    if(globalIndex<0)
    {
        globalIndex=globalIndex+imgs.length
    }
    main_Box.style.backgroundImage=`url(${imgs[globalIndex].getAttribute('src')})`

}