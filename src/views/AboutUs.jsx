import { useState, useEffect } from "react";

export default function AboutUs() {
  const [member, setMember] = useState([])
  const teamMembers = [
    { name: "John Doe", role: "Software Engineer" },
    { name: "Jane Smith", role: "Product Manager" },
    { name: "Mike Johnson", role: "UX Designer" }
  ]

  useEffect(() => {
    // Fetch member images from an API endpoint and assign it to the featuredmembers list
    const fetchMemberImages = async () => {
      try {
        const responses = await Promise.all(teamMembers.map(() => fetch('https://randomuser.me/api/').then((res) => res.json())));
        const mateWithImages = teamMembers.map((mate, index) => ({
          ...mate,
          image: responses[index].results[0].picture.large,
        }));

        setMember(mateWithImages);

      } catch (error) {
        console.error('Error fetching member images:', error);
      }
    };

    fetchMemberImages();
    // console.log(responses)
  }, []);
  useEffect(() => {
    console.log(member)
  }, [member]);
  return (
    <div style={{ padding: '40px', paddingTop: '0px', maxWidth: '1000px' }}>

      <h1 >Our Mission</h1>
      <p> Our mission is to develop innovative, reliable, and cutting-edge software solutions that empower businesses and individuals to achieve their goals. We are committed to delivering excellence through technology, fostering collaboration, and driving digital transformation to make a lasting impact in a rapidly evolving world.</p>
      <h2> Our History</h2>
      <p>Founded in 2024, we started with a small team of passionate developers dedicated to solving complex problems through software. Over the years, we have grown into a leading software company, serving clients across industries with scalable, secure, and user-centric solutions. Our journey is defined by continuous learning, customer satisfaction, and a commitment to pushing the boundaries of technology.</p>


      <h2 >Meet Our Team</h2>
      <div className="mt-2 mb-2 row g-2 flex" id="members-container" style={{ maxWidth: '650px' }}>
        {member[0]?.image ? (
          member.map((mem, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 mb-2"> {/* p-0 removes padding from columns */}
              <div className="member-card mb-2" >
                <img
                  src={mem.image}
                  alt={mem.name}
                  className="img-fluid"
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
                <div className="member-info">
                  <h3 className="h5 mb-1">{mem.name}</h3>
                  <p className="mb-1">{mem.role}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-md-4">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  )
}