import { render, fireEvent, screen } from "@testing-library/react";
import Booking from "./pages/Booking/Booking";

test("Form submission and message display", () => {
  render(<Booking />);

  const dateInput = screen.getByLabelText("Choose Date:");
  const timeInput = screen.getByLabelText("Choose Time:");
  const numberpplInput = screen.getByLabelText("Number of People:");
  const emailInput = screen.getByLabelText("Email:");
  const phoneInput = screen.getByLabelText("Phone:");
  const occasionInput = screen.getByLabelText("Occasion:");
  const submitButton = screen.getByText("Submit");

  expect(
    screen.queryByText("Your reservation has been registered !")
  ).toBeNull();

  fireEvent.change(dateInput, { target: { value: "2023-12-31" } });
  fireEvent.change(timeInput, { target: { value: "18:00" } });
  fireEvent.change(numberpplInput, { target: { value: "5" } });
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(phoneInput, { target: { value: "1234567890" } });
  fireEvent.change(occasionInput, { target: { value: "Birthday" } });

  expect(dateInput.value).toBe("2023-12-31");
  expect(timeInput.value).toBe("18:00");
  expect(numberpplInput.value).toBe("5");
  expect(emailInput.value).toBe("test@example.com");
  expect(phoneInput.value).toBe("1234567890");
  expect(occasionInput.value).toBe("Birthday");

  fireEvent.click(submitButton);

  expect(
    screen.queryByText("Your reservation has been registered !")
  ).toBeTruthy();
});
