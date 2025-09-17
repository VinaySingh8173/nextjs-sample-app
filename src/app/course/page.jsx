import React from 'react'
import Link from 'next/link'

export default function CoursePage() {
  return (
    <>
    <main>
      <h1>Course Page</h1>
    </main>

      <main>
        <ul>
            <li>
            <Link href={`/course/course-details/course-1`}>course 1</Link>
            </li>
            <li>
            <Link href={`/course/course-details/course-2`}>course 2</Link>
            </li>
            <li>
            <Link href={`/course/course-details/course-3`}>course 3</Link>
            </li>
            <li>
            <Link href={`/course/course-details/course-4`}>course 4</Link>
            </li>
            <li>
            <Link href={`/course/course-details/course-5`}>course 5</Link>
            </li> 
            <li>
            <Link href={`/course/course-details/course-6`}>course 6</Link>
            </li> 
            <li>
            <Link href={`/course/course-details/course-7`}>course 7</Link>
            </li> 

        </ul>
    </main>
   
  
      </>

    )
}
  
