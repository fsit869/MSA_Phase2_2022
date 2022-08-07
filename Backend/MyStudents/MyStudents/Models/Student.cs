namespace MyStudents.Models;

/**
 * POCO file. Represents a student
 */
public class Student
{
    public long Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int age { get; set; }
    public string? Upi { get; set; }
}