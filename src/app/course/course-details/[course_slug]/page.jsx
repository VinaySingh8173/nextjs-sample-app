import React from 'react'

export default function CourseDetailsPage({params}) {
  return (
    <>
    <main>
    <h1>This is a course details page</h1>
    </main>
    <main>
    <h2>course details of {params.course_slug}</h2>
    </main>
    </>
  )
}
