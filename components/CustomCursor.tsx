import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const follower = document.getElementById('cursor-follower');
        const label = document.getElementById('cursor-label');

        if (!cursor || !follower || !label) return;

        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            follower.style.transform = `translate3d(${clientX - 15}px, ${clientY - 15}px, 0)`;
            label.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        };

        const onMouseDown = () => {
            follower.classList.add('scale-75', 'opacity-50');
        };

        const onMouseUp = () => {
            follower.classList.remove('scale-75', 'opacity-50');
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                follower.classList.add('cursor-hover');
                const cursorLabel = target.getAttribute('data-cursor-label') || target.closest('[data-cursor-label]')?.getAttribute('data-cursor-label');
                if (cursorLabel) {
                    label.textContent = cursorLabel;
                    label.style.opacity = '1';
                }
            }
        };

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                follower.classList.remove('cursor-hover');
                label.style.opacity = '0';
                setTimeout(() => { if (label.style.opacity === '0') label.textContent = ''; }, 300);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mouseout', onMouseOut);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mouseout', onMouseOut);
        };
    }, []);

    return null; // Logic only component, DOM elements are in index.html
};

export default CustomCursor;
