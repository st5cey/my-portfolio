export default function Home() {
  const projects = [
    {
      title: "Sickle Cell Early Diagnosis Tool",
      description:
        "A CPU-optimized, offline deep learning tool that classifies blood smear images with 91.39% accuracy, designed with resource-limited healthcare environments in mind.",
      technologies: ["Python", "PyTorch", "OpenCV", "Streamlit", "ONNX"],
      github: "https://github.com/st5cey/SickleAide",
    },
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "OpenCV",
    "Streamlit",
    "ONNX",
    "IBM SPSS",
    "Data Structures & Algorithms",
    "Academic Writing",
    "Project Management",
    "Collaborative Problem Solving",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 border-b bg-white/90 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <a href="#" className="font-semibold">
            SJK.
          </a>

          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#about" className="transition hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="transition hover:text-gray-900">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-gray-900">
              Skills
            </a>
            <a href="#cv" className="transition hover:text-gray-900">
              CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-28">
        <p className="mb-5 text-sm font-medium tracking-wide text-gray-500">
          Hello, I’m Stacey J. Kiprop 👋
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Data Science Student and Practioner | ML & DL | Problem Solver
        </h1>

        <p className="mt-5 max-w-2xl text-xl leading-8 text-gray-600">
          Curious about data, fascinated by machine learning and deep learning, and always
          looking for something new to learn.
        </p>

        <p className="mt-4 max-w-xl text-sm italic text-gray-500">
          Turning raw data into impactful solutions through logic, ethics, and collaboration.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            View my work
          </a>

          <a
            href="/cv.pdf"
            download
            className="rounded-lg border px-5 py-3 text-sm font-medium transition hover:bg-gray-50"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-3xl font-semibold">A little about me</h2>

        <div className="mt-6 max-w-2xl space-y-5 leading-7 text-gray-600">
          <p>
            I’m a Data Science student interested in the many ways data can
            help us understand problems and build better solutions. I’m
            particularly drawn to machine learning, deep learning, and big
            data, but I enjoy exploring almost anything related to data.
          </p>

          <p>
            I’m naturally curious and enjoy learning new concepts, tools, and
            ideas without feeling the need to know everything at once. Most of
            what you’ll find here comes from that curiosity: things I’ve
            learned, experimented with, and built along the way.
          </p>

          <p>
            Outside of data, I enjoy reading and writing. I like exploring
            ideas, putting thoughts into words, and occasionally getting lost
            in a good book.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
        <div>
          <p className="text-sm font-medium text-gray-500">Things I’ve built</p>
          <h2 className="mt-2 text-3xl font-semibold">Projects</h2>
        </div>

        <div className="mt-8 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                className="mt-6 inline-block text-sm font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium text-gray-500">What I work with</p>
        <h2 className="mt-2 text-3xl font-semibold">Skills & Tools</h2>

        <div className="mt-6 flex max-w-3xl flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border px-4 py-2 text-sm text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-semibold">CV</h2>

        <p className="mt-4 max-w-xl text-gray-600">
          Want to know a little more about my academic background and
          experience?
        </p>

        <a
          href="/cv.pdf"
          download
          className="mt-6 inline-block rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          Download CV
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        <p className="mt-1">© 2026 Stacey Jebet Kiprop</p>
      </footer>
    </main>
  );
}