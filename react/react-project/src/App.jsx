import Card from "./components/card";

const App = (props) => {
  const jobOpenings = [
    {
      brandLogo: "https://images.unsplash.com/photo-1662947190722-5d272f82a526?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZ2xlJTIwJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1706879349328-4a05bb3e16ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWV0YSUyMCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      company: "Meta",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1602359337719-a8bcbd1f7b51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      company: "Amazon",
      datePosted: "1 week ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1609538106201-e0dc68873410?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjAlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
      company: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$10/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1717295248299-74c084c31184?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV0ZmxpeCUyMCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      company: "Netflix",
      datePosted: "10 weeks ago",
      post: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$73/hour",
      location: "Los Angeles, USA",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1678483789105-2720201bee03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pY3Jvc29mdCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      company: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$79/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1662947475980-4ef86d494b20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzbGFsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
      company: "Tesla",
      datePosted: "8 days ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Internship",
      pay: "$85/hour",
      location: "Palo Alto, USA",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1662947683395-1ce33bdcd094?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bnZpZGlhJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
      company: "NVIDIA",
      datePosted: "6 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$50/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1706778573754-e52010c13b97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWRvYmUlMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
      company: "Adobe",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$80/hour",
      location: "Noida, India",
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1761625424632-c6adc86211d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9wZW4lMjBhaSUyMCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      companyName: "OpenAI",
      datePosted: "1 month ago",
      post: "Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$170/hour",
      location: "San Francisco, USA",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem,idx) {
        return (
          <div key={idx}>
          <Card
            company={elem.company}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            location={elem.location}
            pay={elem.pay}
            brandLogo={elem.brandLogo}
            datePosted={elem.datePosted}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;
