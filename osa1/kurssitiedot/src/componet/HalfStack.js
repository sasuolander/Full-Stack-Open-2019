import React from 'react';
export const Title =({course})=><h1>{course.name}</h1>;
export const Content =({course})=>course.parts.map(part=>{return <p key={part.tehtavia}>{part.name} {part.exercise}</p>});
export const Summary =({course})=><p>Yhteensa {course.parts.length}</p>;