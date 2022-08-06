using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace MyStudents.Models;

public class StudentContext: DbContext
{
    public StudentContext(DbContextOptions<StudentContext> options):base(options) {}

    protected StudentContext()
    {
    }

    public DbSet<Student> Students { get; set; } = null!;
}