﻿using carRental_Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;

namespace carRental_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarRentalController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly DataContext _context;

        public CarRentalController(DataContext dataContext, IConfiguration config)
        {
            _config = config;
            _context = dataContext;
        }

        [HttpPost("AddCar")]
        public IActionResult AddCar([FromBody] vehicle newVehicle)
        {
            if (newVehicle == null)
            {
                return BadRequest("Invalid vehicle data.");
            }

            newVehicle.VehicleNo = 0;
            newVehicle.Avaialblity=true; 

            _context.Vehicles.Add(newVehicle);
            _context.SaveChanges();

            return Ok(new { message = "Vehicle added successfully" });
        }

        ///////////////////////////////////////for users
        [AllowAnonymous]
        [HttpPost]
        [Route("Register")]
        public IActionResult Register([FromBody] user newUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingUser = _context.Users.FirstOrDefault(u => u.Email == newUser.Email);
            if (existingUser != null)
            {
                return Conflict("User with this email already exists.");
            }
            if (string.IsNullOrEmpty(newUser.role))
            {
                newUser.role = "user";
            }

            _context.Users.Add(newUser);
            _context.SaveChanges();

            return Ok("User registered successfully");
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("LoginUser")]
        public IActionResult Login(Login user)
        {
            var UserAvailable = _context.Users.Where(u => u.Email == user.Email && u.Pswd == u.Pswd).FirstOrDefault();
            if (UserAvailable != null)
                return Ok(true);
            else
                return Ok("Failure");
        }

        [HttpGet("GetUserData")]
        public IActionResult GetAllUsers()
        {
            var res = _context.Users.ToList();
            return Ok(res); 
        }
       

        //This is just for testing--NO Use 
        [HttpGet("UserDetails/{email}")]
        public IActionResult GetUser(string email)
        {
            var res = _context.Users.ToList();
            var userr = res.FirstOrDefault(c => c.Email == email);
            if (userr != null) return Ok(userr);
            else return BadRequest("Failure");
        }

        ////////////////////////////////////////for vehicles
        [HttpGet("AllData")]
        public IActionResult GetAllCars()
        {
            var res = _context.Vehicles.ToList();
            return Ok(res);
        }

        [HttpGet("CarDetials/{id}")]
        public IActionResult GetCar(int id)
        {
            var res = _context.Vehicles.ToList();
            var car = res.FirstOrDefault(c => c.VehicleNo == id);
            if (car != null) return Ok(car);
            else return BadRequest("Failure");
        }

        /////////////////////////////////////////for rental Agreement
        [HttpPost("RentalAggrement")]
        public IActionResult RentalForm(RentalAgreement rental)
        {
            var car = _context.Vehicles.Where(x => x.VehicleNo == rental.VehicleNo).FirstOrDefault();
            if (rental != null)
            {
                _context.RentalAgreement.Add(rental);
                _context.SaveChanges();

                car.Avaialblity = rental.Avaialblity;
                _context.SaveChanges();
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }

        [HttpGet("GetAllAggrement")]
        public IActionResult GetAllAggrement()
        {
            var res = _context.RentalAgreement.ToList();
            return Ok(res);
        }

        [HttpPost("GetUserAggrement")]
        public IActionResult gett(Email _email)
        {
            var fullData = _context.RentalAgreement.ToList();

            List<RentalAgreement> lis = new List<RentalAgreement>();
            foreach (var item in fullData)
            {
                if (string.Equals(item.Email, _email.Emails, StringComparison.OrdinalIgnoreCase))
                {
                    lis.Add(item);
                }
            }
            return Ok(lis);
        }

        //////////////////////// Admin Usage 
        [HttpGet("GetAgreement/{id}")]
        public IActionResult GetAgreement(int id)
        {
            var res = _context.RentalAgreement.Where(x => x.AgreementID == id);
            if (res != null) return Ok(res);
            else return BadRequest();
        }

        [HttpPut("UpdateAgreement/{id}")]
        public IActionResult UpdateAgreement(int id, updateRental newAgreement)
        {
            var agreement = _context.RentalAgreement.Where(x => x.AgreementID == id).FirstOrDefault();
            if (agreement != null)
            {
                agreement.Days = newAgreement.Day;
                agreement.RentalCost = newAgreement.tRent;
                _context.SaveChanges();
                return Ok(agreement);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("DeleteAgreement/{id}")]
        public IActionResult DeleteAgreement(int id)
        {
            var agreement = _context.RentalAgreement.Where(x => x.AgreementID == id).FirstOrDefault();
            var car = _context.Vehicles.Where(x => x.VehicleModel == agreement.VehicleModel).FirstOrDefault();

            _context.RentalAgreement.Remove(agreement);
            car.Avaialblity = true;
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet("PushReturn/{id}")]
        public IActionResult pushReturn(int id)
        {
            var agreement = _context.RentalAgreement.Where(x => x.AgreementID == id).FirstOrDefault();

            agreement.Avaialblity = true;
            _context.SaveChanges();
            return Ok(agreement);
        }

        [HttpGet("AcceptReturn/{id}")]
        public IActionResult acceptReturn(int id)
        {
            var agreement = _context.RentalAgreement.Where(x => x.AgreementID == id).FirstOrDefault();

            // Vérifier si l'accord de location est nul
            if (agreement == null)
            {
                return NotFound($"Rental agreement with ID {id} not found.");
            }

            // Récupération de la voiture en fonction du modèle de véhicule de l'accord de location
            var car = _context.Vehicles.Where(x => x.VehicleModel == agreement.VehicleModel).FirstOrDefault();

            // Vérifier si la voiture est nulle
            if (car == null)
            {
                return NotFound($"Vehicle with model {agreement.VehicleModel} not found.");
            }

            // Supprimer l'accord de location
            _context.RentalAgreement.Remove(agreement);

            // Mettre à jour la disponibilité de la voiture
            car.Avaialblity = true;

            _context.SaveChanges();

            return Ok(agreement);
        }
    }
}
