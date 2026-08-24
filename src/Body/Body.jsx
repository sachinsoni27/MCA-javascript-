import React from 'react'
import Student from './Student'

const Body = () => {
  const [studentInfo, setStudentInfo] = React.useState([
    { id: 1, name: 'Shivang', marks: 90, className: 'MCA-D' },
    { id: 2, name: 'Sachin', marks: 100, className: 'MCA-D' },
  ])

  return (
    <main>
      <p>Welcome to the app. Everything is working correctly.</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {studentInfo.map((student) => (
            <Student
              key={student.id}
              id={student.id}
              name={student.name}
              marks={student.marks}
              className={student.className}
            />
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Body
