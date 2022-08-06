import React, { useState } from 'react';
import { Rect, Stage, Layer } from 'react-konva'
import Konva from 'konva';
import { FaPlus } from 'react-icons/fa'

const ListRects = () => {
    let [rects, setRects] = useState([])
    let [rectComps, setRectComps] = useState(null)

    const CreateNewRect = () => (
        {
            x: (rects.length <= 6 ? rects.length * 200 : (rects.length % 6) * 200),
            y: Math.floor(rects.length / 6) * 100,
            width: 200,
            height: 100,
            fill: Konva.Util.getRandomColor(),
            shadowBlur: 5,
            title: 'New Node'
        }
    )

    const AddNewRect = () => {
        let newRect = CreateNewRect()
        setRects([...rects, newRect])
        setRectComps(
            <>
                {
                    rects.map(r => {
                        return <Rect
                            x={r.x}
                            y={r.y}
                            width={r.width}
                            height={r.height}
                            fill={r.fill}
                            shadowBlur={r.shadowBlur}
                        />
                    })
                }
            </>
        )
        console.log(rects)
    }


    return (
        <div>
            <button onClick={AddNewRect}><FaPlus /></button>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {rectComps}
                </Layer>
            </Stage>
        </div>
    );
};

export default ListRects;