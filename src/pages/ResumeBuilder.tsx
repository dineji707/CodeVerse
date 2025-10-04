import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Download, Eye, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [newSkill, setNewSkill] = useState("");
  const [resumeData, setResumeData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    summary: "Passionate software engineer with 3+ years of experience in full-stack development...",
    experience: [
      {
        title: "Software Engineer",
        company: "Tech Corp",
        duration: "2022 - Present",
        description: "Developed scalable web applications using React and Node.js",
      },
    ],
    education: [
      {
        degree: "B.S. in Computer Science",
        school: "University of Technology",
        year: "2022",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"],
  });

  const templates = [
    { name: "Modern", color: "from-blue-500 to-cyan-500", popular: true },
    { name: "Classic", color: "from-gray-600 to-gray-800", popular: false },
    { name: "Creative", color: "from-purple-500 to-pink-500", popular: true },
    { name: "Minimal", color: "from-green-500 to-emerald-500", popular: false },
  ];

  const updateField = (field: string, value: string) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        { title: "", company: "", duration: "", description: "" },
      ],
    });
  };

  const removeExperience = (index: number) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((_, i) => i !== index),
    });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updated = [...resumeData.experience];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, experience: updated });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { degree: "", school: "", year: "" },
      ],
    });
  };

  const removeEducation = (index: number) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index),
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updated = [...resumeData.education];
    updated[index] = { ...updated[index], [field]: value };
    setResumeData({ ...resumeData, education: updated });
  };

  const addSkill = () => {
    if (newSkill.trim() && !resumeData.skills.includes(newSkill.trim())) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  const handlePreview = () => {
    toast({
      title: "Preview",
      description: "Preview functionality coming soon!",
    });
  };

  const handleDownloadPDF = () => {
    toast({
      title: "Download Started",
      description: "Your resume PDF is being generated...",
    });
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <FileText className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Resume Builder</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Build Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Professional Resume</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create ATS-friendly resumes with tech-focused templates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Full Name" 
                  value={resumeData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
                <Input 
                  placeholder="Email" 
                  value={resumeData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
                <Input 
                  placeholder="Phone" 
                  value={resumeData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
                <Input 
                  placeholder="LinkedIn" 
                  value={resumeData.linkedin}
                  onChange={(e) => updateField("linkedin", e.target.value)}
                />
                <Input 
                  placeholder="GitHub" 
                  value={resumeData.github}
                  onChange={(e) => updateField("github", e.target.value)}
                  className="md:col-span-2" 
                />
              </div>
            </Card>

            {/* Summary */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Professional Summary</h2>
              <Textarea 
                placeholder="Write a brief summary about yourself..." 
                value={resumeData.summary}
                onChange={(e) => updateField("summary", e.target.value)}
                rows={4}
              />
            </Card>

            {/* Experience */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Work Experience</h2>
                <Button variant="ghost" size="sm" onClick={addExperience}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
              {resumeData.experience.map((exp, index) => (
                <Card key={index} className="bg-muted/20 p-4 mb-3">
                  <div className="flex items-start justify-between mb-3">
                    <Input 
                      placeholder="Job Title" 
                      value={exp.title}
                      onChange={(e) => updateExperience(index, "title", e.target.value)}
                      className="flex-1 mr-2" 
                    />
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeExperience(index)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <Input 
                      placeholder="Company" 
                      value={exp.company}
                      onChange={(e) => updateExperience(index, "company", e.target.value)}
                    />
                    <Input 
                      placeholder="Duration" 
                      value={exp.duration}
                      onChange={(e) => updateExperience(index, "duration", e.target.value)}
                    />
                  </div>
                  <Textarea 
                    placeholder="Job description..." 
                    value={exp.description}
                    onChange={(e) => updateExperience(index, "description", e.target.value)}
                    rows={2}
                  />
                </Card>
              ))}
            </Card>

            {/* Education */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Education</h2>
                <Button variant="ghost" size="sm" onClick={addEducation}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
              {resumeData.education.map((edu, index) => (
                <Card key={index} className="bg-muted/20 p-4 mb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Input 
                        placeholder="Degree" 
                        value={edu.degree}
                        onChange={(e) => updateEducation(index, "degree", e.target.value)}
                        className="md:col-span-2" 
                      />
                      <Input 
                        placeholder="Year" 
                        value={edu.year}
                        onChange={(e) => updateEducation(index, "year", e.target.value)}
                      />
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeEducation(index)}
                      className="ml-2"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <Input 
                    placeholder="School/University" 
                    value={edu.school}
                    onChange={(e) => updateEducation(index, "school", e.target.value)}
                  />
                </Card>
              ))}
            </Card>

            {/* Skills */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 glass rounded-lg flex items-center gap-2">
                    {skill}
                    <button 
                      onClick={() => removeSkill(index)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder="Add a skill..." 
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                />
                <Button onClick={addSkill} variant="ghost">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Preview & Templates */}
          <div className="space-y-6">
            {/* Templates */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Choose Template</h2>
              <div className="space-y-3">
                {templates.map((template) => (
                  <Card 
                    key={template.name}
                    className="p-4 cursor-pointer hover-lift transition-all border-2 border-transparent hover:border-primary"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{template.name}</span>
                      {template.popular && (
                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className={`h-32 rounded-lg bg-gradient-to-br ${template.color} opacity-50`} />
                  </Card>
                ))}
              </div>
            </Card>

            {/* Actions */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Export Resume</h2>
              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  className="w-full" 
                  size="lg"
                  onClick={handleDownloadPDF}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  variant="glass" 
                  className="w-full"
                  onClick={handlePreview}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
            </Card>

            {/* Tips */}
            <Card className="glass-card p-6">
              <h3 className="font-bold mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use action verbs (Built, Developed, Led)</li>
                <li>• Quantify achievements with numbers</li>
                <li>• Keep it to 1-2 pages maximum</li>
                <li>• Tailor for each job application</li>
                <li>• Use keywords from job description</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumeBuilder;
