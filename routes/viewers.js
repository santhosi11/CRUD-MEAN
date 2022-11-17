const express = require('express')
const router = express.Router()
const Viewer = require('../models/viewer')

router.get('/',async(req,res)=>{
    try{
        const viewersData= await Viewer.find()
        res.json(viewersData)
    }
    catch(err){
        res.send('Error'+err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const viewerData = await Viewer.findById(req.params.id)
        res.json(viewerData)
    }
    catch(err)
    {
        res.send('Error '+err)
    }
})
router.post('/',async(req,res)=>{
    const viewerObj=new Viewer({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const v1 = await viewerObj.save()
        res.json(v1)
    }
    catch(err)
    {
        res.send('Error '+err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const viewerData = await Viewer.findById(req.params.id)
        viewerData.tech=req.body.tech
        const v1 = await viewerData.save()
        res.json(v1)
    }
    catch(err)
    {
        res.send('Error '+err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const viewerData = await Viewer.findById(req.params.id).remove()
        //const v1 = viewerData.remove()
        res.send('Deleted')
    }
    catch(err)
    {
        res.send('Error '+err)
    }
})
module.exports = router