import { Router, Request, Response } from "express";


const router = Router();


router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'Mensaje exitoso'
    })

})

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const body = req.body.body;
    const to = req.body.to;
    const id = req.params.id;

    res.json({
        ok: true,
        cuerpo: body,
        de: to,
        id
    })
})

export default router