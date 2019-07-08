import React from 'react';
export const Course =({course})=>{
    return (
        <React.Fragment>
            <Title course={course}/>
              <Content course={course}/>
              <Summary course ={course}/>
        </React.Fragment>

)
            
}
export const Title =({course})=><h1>{course.name}</h1>;
export const Content =({course})=>course.parts.map(part=>{return <p key={part.tehtavia}>{part.name} {part.exercises}</p>});
export const Summary =({course})=><p>Yhteensa {course.parts.map(part=>part.exercises).reduce((p,c)=>{
   return p+c
},0)}</p>;