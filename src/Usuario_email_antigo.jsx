function Props({nomeAntigo, emailAntigo}) {
  return (
    <>
        <br />
        <p className="font-mono">O seu nome antigo era{nomeAntigo}</p>
        <p className="font-mono">O <a>seu antigo e-mail</a> é:  {emailAntigo}</p>
    </>
  )
}

export default Props
