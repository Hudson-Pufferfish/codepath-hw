// Image credits: Kickstarter
const events =  [
  {
    id: 1,
    title: "HackPalachia",
    location: "Athens, Ohio",
    imgSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.hackpalachia.com/"
  },
  {
    id: 2,
    title: "MadHacks",
    location: "Madison, Wisconsin",
    imgSrc: "https://imgs.search.brave.com/lCrPZmULnIL9SbGjjv1CTOH0i4mUdkIcKtSWBH8IRE8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9uZXdz/Lndpc2MuZWR1L2Nv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAzL2Fl/cmlhbF9VV18xNy0z/NW1tMTFfNjg3My0x/LmpwZw",
    link: "https://www.madhacks.io/"
  },
  {
    id: 3,
    title: "Hack Dearborn",
    location: "Dearbon, Michigan",
    imgSrc: "https://imgs.search.brave.com/xSph9ciOru5BpDotWPfipC4DZSuzHaEUJ1PZN8pZ5L8/rs:fit:1200:1152:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL21l/ZGlhL0RqWUFzZkpX/MEFFVGFGVy5qcGc6/bGFyZ2U",
    link: "https://www.hackdearborn.org/"
  },
  {
    id: 4,
    title: "Hackabull",
    location: "Tampa, Florida",
    imgSrc: "https://imgs.search.brave.com/VvG7N2IktNdbeVsJQR16_CBwRatKVilZVVhTrLFW1fg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d2ZsYS5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzcx/LzIwMTkvMDQvdXNm/XzM1MzIwNTA2X3Zl/cjEuMC5qcGc_dz0y/NTYwJmg9MTQ0MCZj/cm9wPTE",
    link: "https://www.hackabull.dev/"
  },
  {
    id: 5,
    title: "HooHacks",
    location: "Charlottesville, Virginia",
    imgSrc: "https://imgs.search.brave.com/puNBymVKgmBqYzQ7IraPOYornwSn1m4ZAC2EIw1eem0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9uZXdz/LnZpcmdpbmlhLmVk/dS9zaXRlcy9kZWZh/dWx0L2ZpbGVzL2Fy/dGljbGVfaW1hZ2Uv/Y2F0YWx5c3RfYWNj/ZWxlcmF0b3Jfc3Nf/aGVhZGVyXzMtMi5q/cGc",
    link: "https://www.hoohacks.io/"
  },
  {
    id: 6,
    title: "HackPrinceton",
    location: "Princeton, New Jersey",
    imgSrc: "https://imgs.search.brave.com/7PZzxNkZk1BJ-k08GLS9bfOUHC3RBzAhET0DAi-15VE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVj/b2xsZWdlcG9zdC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDcvaW1nXzA4/MjNfMl8wLmpwZw",
    link: "https://www.hackprinceton.com/"
  },
  {
    id: 7,
    title: "Hacklahoma",
    location: "Norman, Oklahoma",
    imgSrc: "https://imgs.search.brave.com/u87omBPG4bUT6_CStqAGssRSodvkBvvGk-9BqTMrjmw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dmlzaXRub3JtYW4u/Y29tL3VwbG9hZHMv/VGhlLVVuaXZlcnNp/dHktb2YtT2tsYWhv/bWEvQ2FtcHVzL291/X2xpYi5qcGc",
    link:"https://hacklahoma.org/"
  },
  {
    id: 8,
    title: "Hack_NCState",
    location: "Raleigh, North Carolina",
    imgSrc: "https://imgs.search.brave.com/wKUixmxTKkYANyuef7YwUlYi4fWe8IoAKJAI3xatgWQ/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tanQtRkc3RFhQ/dkEvV2FYeXVBMTlG/YkkvQUFBQUFBQUF1/NGsvMVNUa3E1ZVRl/SDR3MzFWaVBRVWpk/a0lDVTZrYWhUc2tn/Q0s0QkdBWVlDdy9z/MTYwMC9Vbml2ZXJz/aXR5JTJCb2YlMkJN/YXJ5bGFuZCUyNTJD/JTJCQ29sbGVnZSUy/QlBhcmslMkItJTJC/V2lraXdhbmQtNzk4/MjAzLmpwZw",
    link: "https://hackncstate.org/"
  },
  {
    id: 9,
    title: "HackKU",
    location: "Lawrence, Kansas",
    imgSrc: "https://imgs.search.brave.com/UZrwmuBZnWZi3ON1SEQPnm4jispMegP1Kn4KxwPSTz4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aG9ub3Jzb2NpZXR5/Lm9yZy9zaXRlcy9k/ZWZhdWx0L2ZpbGVz/L3VuaS1jYW1wdXMt/MTg3NTU",
    link: "https://hackku.org/"
  },
  {
    id: 10,
    title: "LAHacks",
    location: "Los Angeles, California",
    imgSrc: "https://imgs.search.brave.com/Ghf_gFxLxwfK5oYJVkj6PkkFU2rEj4210kKlfZcRL_I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2Ntcy5pcHJlc3Ny/b29tLmNvbS8xNzMv/ZmlsZXMvMjAyMDgv/Um95Y2UrSGFsbC5q/cGc",
    link: "https://lahacks.com/home"
  },
]


export default events;