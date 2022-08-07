using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace MyStudents.Models;
/**
 * Repository to interact with DB
 */
public class StudentContext: DbContext
{
    public StudentContext(DbContextOptions<StudentContext> options):base(options) {}

    protected StudentContext()
    {
    }

    public DbSet<Student> Students { get; set; } = null!;
}