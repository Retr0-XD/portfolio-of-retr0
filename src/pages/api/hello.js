// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'Retr0' })
  res.status(404).json({name : 'dio'})
}