import React, { useEffect, useRef } from 'react';
import range from 'lodash/range';
import reduce from 'lodash/reduce';

import _d from 'debug';

/* eslint-disable no-unused-vars */
const log = _d('string-art:components:Circle'),
    error = _d('string-art:error'),
    warn = _d('string-art:warning');
/* eslint-enable no-unused-vars */

const add = (...points) => reduce(points, (t, p) => [t[0] + p[0], t[1] + p[1]], [0, 0]);
const multiply = (...points) => reduce(points, (t, p) => [t[0] * p[0], t[1] * p[1]], [1, 1]);

function Circle({ numPoints = 200, size = 500, padding = 5, pointRadius = 1 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        log('draw');
        const ctx = canvasRef.current.getContext('2d');

        const scaledSize = multiply([2, 2], [size, size]);

        ctx.clearRect(0, 0, ...scaledSize);

        const center = multiply(scaledSize, [0.5, 0.5]);
        const radius = scaledSize[0] / 2 - padding;

        // draw points
        range(0, numPoints).forEach((i) => {
            ctx.moveTo(...center);
            const theta = (i / numPoints) * Math.PI * 2;
            const pos = [radius * Math.cos(theta), radius * Math.sin(theta)];

            // draw a point
            ctx.beginPath();
            ctx.arc(...add(pos, center), pointRadius, 0, Math.PI * 2);
            ctx.fill();
        });
    }, [numPoints, padding, size, pointRadius]);
    return <canvas ref={canvasRef} width={size * 2} height={size * 2} style={{ width: size, height: size }} />;
}

export default Circle;
