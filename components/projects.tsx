import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-4 py-12 flex flex-col gap-8 bg-background text-foreground"
    //   style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 accent">Projects</h2>
        <span className="text-sm font-bold tracking-wider uppercase accent">
          Portfolio Highlights
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          className="rounded-xl shadow-lg p-8 flex flex-col gap-4 border"
          style={{
            background: "var(--color-card)",
            borderColor:
              "color-mix(in srgb, var(--color-line) 30%, transparent)",
          }}
        >
          <h3 className="text-xl font-semibold accent">Personal Portfolio</h3>
          <p className="flex-1">
            A modern, responsive portfolio built with Nextjs, showcasing my work,
            skills, and experience.
          </p>
          <Link
            href="https://github.com/alenjoy7/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold accent underline decoration-wavy hover:opacity-90"
          >
            View Project
          </Link>
        </div>
        <div
          className="rounded-xl shadow-lg p-8 flex flex-col gap-4 border"
          style={{
            background: "var(--color-card)",
            borderColor:
              "color-mix(in srgb, var(--color-line) 30%, transparent)",
          }}
        >
          <h3 className="text-xl font-semibold accent">RateUp App</h3>
          <p className="flex-1">
            A scalable SaaS platform for digital menus and WhatsApp engagement,
            built with Next.js and Fastify.
          </p>
          <Link
            href="https://rateup.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold accent underline decoration-wavy hover:opacity-90"
          >
            View Project
          </Link>
        </div>
        <div
          className="rounded-xl shadow-lg p-8 flex flex-col gap-4 border"
          style={{
            background: "var(--color-card)",
            borderColor:
              "color-mix(in srgb, var(--color-line) 30%, transparent)",
          }}
        >
          <h3 className="text-xl font-semibold accent">Educonnect</h3>
          <p className="flex-1">
            A platform for businesses to host their learning content, each with
            their own subdomain. Enables companies to manage, deliver, and track
            educational resources for their teams and clients.
          </p>
          <Link
            href="https://educonnect.velonixtechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold accent underline decoration-wavy hover:opacity-90"
          >
            View Project
          </Link>
        </div>
        <div
          className="rounded-xl shadow-lg p-8 flex flex-col gap-4 border"
          style={{
            background: "var(--color-card)",
            borderColor:
              "color-mix(in srgb, var(--color-line) 30%, transparent)",
          }}
        >
          <h3 className="text-xl font-semibold accent">Backlog</h3>
          <p className="flex-1">
            An IT Backlog System for managing tickets and projects. Provides
            role-based access for Admin, PM, Developer, and QA to streamline
            project workflows and track progress.
          </p>
          <Link
            href="https://backlog.velonixtechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold accent underline decoration-wavy hover:opacity-90"
          >
            View Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
