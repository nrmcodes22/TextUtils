import React,{useState} from 'react'
const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]
  
  export default function About() {
    const [mystyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const[btntext,setBtnText]=useState("Enable Dark Mode")
    const toggle=()=>{
        if(mystyle.color=="black"){
            setMyStyle({
                color:"white",
                backgroundColor:"black"
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setBtnText("Enable Dark Mode") 
        }
    }
    return (
    
      <div className="h-screen py-24 sm:py-32" style={mystyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl" style={mystyle} >About Us</h2>
            <p className="mt-2 text-lg leading-8 " style={mystyle}>
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} style={mystyle}>
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full px-3 py-1.5 font-medium "style={mystyle}
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6  "style={mystyle}>
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 "style={mystyle}>{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full "style={mystyle} />
                  <div className="text-sm leading-6">
                    <p className="font-semibold "style={mystyle}>
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p style={mystyle}>{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
            <button onClick={toggle}className='bg-blue-500  px-4 py-2 rounded-md w-64'>{btntext}</button>
          </div>
          
        </div>
        
      </div>
      
    )
  }
  