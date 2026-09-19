import { jsPDF } from 'jspdf';
import pptxgen from 'pptxgenjs';
import { PRESENTATION_SLIDES, SlideData } from '../data/presentationData';

export interface ExportOptions {
  includeSpeakerNotes?: boolean;
  theme?: 'dark' | 'light';
  format?: 'pdf' | 'pptx';
}

/**
 * Generates and downloads a multi-page 16:9 PowerPoint (.pptx) presentation
 */
export async function downloadPPTX(options: ExportOptions = {}): Promise<void> {
  const { includeSpeakerNotes = true } = options;

  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.author = 'Ponduri Vinuthna';
  pres.company = 'SmartSoil & Crop Care';
  pres.title = 'SmartSoil & Crop Care - AI Kisan Platform Pitch Deck';
  pres.subject = 'Agricultural AI & IoT Innovation Deck';

  // Iterate over all 8 slides
  for (let i = 0; i < PRESENTATION_SLIDES.length; i++) {
    const slideData = PRESENTATION_SLIDES[i];
    const slide = pres.addSlide();

    // Dark theme background
    slide.background = { color: '0A111E' };

    // Slide category / eyebrow badge
    slide.addText(slideData.category.toUpperCase(), {
      x: 0.8,
      y: 0.4,
      w: 8.5,
      h: 0.35,
      fontSize: 10,
      fontFace: 'Arial',
      color: '10B981',
      bold: true,
    });

    // Slide main title
    slide.addText(slideData.title, {
      x: 0.8,
      y: 0.75,
      w: 11.5,
      h: 0.6,
      fontSize: 24,
      fontFace: 'Arial',
      color: 'FFFFFF',
      bold: true,
    });

    // Subtitle / Headline
    slide.addText(slideData.headline || slideData.subtitle, {
      x: 0.8,
      y: 1.35,
      w: 11.7,
      h: 0.55,
      fontSize: 12,
      fontFace: 'Arial',
      color: '94A3B8',
      italic: true,
    });

    // Key Metrics row (if available)
    if (slideData.keyMetrics && slideData.keyMetrics.length > 0) {
      const metricCount = slideData.keyMetrics.length;
      const cardWidth = Math.min(2.7, (11.7 - (metricCount - 1) * 0.2) / metricCount);

      slideData.keyMetrics.forEach((metric, idx) => {
        const xPos = 0.8 + idx * (cardWidth + 0.2);
        
        // Card background shape
        slide.addShape(pres.ShapeType.rect, {
          x: xPos,
          y: 2.0,
          w: cardWidth,
          h: 1.0,
          fill: { color: '111C2E' },
          line: { color: '1E293B', width: 1 },
        });

        // Metric value
        slide.addText(metric.value, {
          x: xPos + 0.1,
          y: 2.05,
          w: cardWidth - 0.2,
          h: 0.45,
          fontSize: 18,
          fontFace: 'Arial',
          color: '34D399',
          bold: true,
          align: 'center',
        });

        // Metric label & change
        const labelText = metric.change ? `${metric.label}\n(${metric.change})` : metric.label;
        slide.addText(labelText, {
          x: xPos + 0.1,
          y: 2.5,
          w: cardWidth - 0.2,
          h: 0.45,
          fontSize: 9,
          fontFace: 'Arial',
          color: 'CBD5E1',
          align: 'center',
        });
      });
    }

    // Bullet Points / Solution Details (2 columns)
    const pointsY = slideData.keyMetrics && slideData.keyMetrics.length > 0 ? 3.2 : 2.2;
    const colWidth = 5.75;

    slideData.bulletPoints.forEach((point, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const xPos = 0.8 + col * (colWidth + 0.25);
      const yPos = pointsY + row * 1.6;

      // Card container
      slide.addShape(pres.ShapeType.rect, {
        x: xPos,
        y: yPos,
        w: colWidth,
        h: 1.45,
        fill: { color: '111C2E' },
        line: { color: '10B981', width: 0.75 },
      });

      // Point heading & tag
      const titleText = point.tag ? `[${point.tag}] ${point.heading}` : point.heading;
      slide.addText(titleText, {
        x: xPos + 0.2,
        y: yPos + 0.1,
        w: colWidth - 0.4,
        h: 0.35,
        fontSize: 12,
        fontFace: 'Arial',
        color: 'F8FAFC',
        bold: true,
      });

      // Point description
      slide.addText(point.description, {
        x: xPos + 0.2,
        y: yPos + 0.45,
        w: colWidth - 0.4,
        h: 0.9,
        fontSize: 10,
        fontFace: 'Arial',
        color: '94A3B8',
        wrap: true,
      });
    });

    // Footer Info
    slide.addText(`Slide ${i + 1} of ${PRESENTATION_SLIDES.length} • SmartSoil & Crop Care • Lead: Ponduri Vinuthna`, {
      x: 0.8,
      y: 6.85,
      w: 11.7,
      h: 0.3,
      fontSize: 9,
      fontFace: 'Arial',
      color: '64748B',
    });

    // Native Speaker Notes
    if (includeSpeakerNotes && slideData.speakerNotes) {
      slide.addNotes(slideData.speakerNotes);
    }
  }

  // Save the presentation
  await pres.writeFile({ fileName: 'SmartSoil_CropCare_Live_Pitch_Deck.pptx' });
}

/**
 * Generates and downloads a clean, high-resolution 16:9 PDF presentation
 */
export function downloadPDF(options: ExportOptions = {}): void {
  const { includeSpeakerNotes = true, theme = 'dark' } = options;
  const isDark = theme === 'dark';

  // 16:9 Widescreen dimensions in mm (297 x 167.06 mm)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [297, 167],
  });

  const width = 297;
  const height = 167;

  PRESENTATION_SLIDES.forEach((slide, idx) => {
    if (idx > 0) {
      doc.addPage([297, 167], 'landscape');
    }

    // 1. Background
    if (isDark) {
      doc.setFillColor(11, 17, 30); // #0b111e
      doc.rect(0, 0, width, height, 'F');
      // Subtle top header line
      doc.setDrawColor(16, 185, 129); // #10b981
      doc.setLineWidth(1);
      doc.line(0, 0, width, 0);
    } else {
      doc.setFillColor(248, 250, 252); // #f8fafc
      doc.rect(0, 0, width, height, 'F');
      doc.setDrawColor(5, 150, 105);
      doc.setLineWidth(1);
      doc.line(0, 0, width, 0);
    }

    // 2. Category badge
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    if (isDark) {
      doc.setTextColor(52, 211, 153); // emerald-400
    } else {
      doc.setTextColor(5, 150, 105);
    }
    doc.text(slide.category.toUpperCase(), 16, 15);

    // 3. Main Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    if (isDark) {
      doc.setTextColor(255, 255, 255);
    } else {
      doc.setTextColor(15, 23, 42);
    }
    doc.text(slide.title, 16, 24);

    // 4. Headline / Subtitle
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    if (isDark) {
      doc.setTextColor(148, 163, 184); // slate-400
    } else {
      doc.setTextColor(71, 85, 105);
    }
    const headlineLines = doc.splitTextToSize(slide.headline || slide.subtitle, width - 32);
    doc.text(headlineLines.slice(0, 2), 16, 31);

    let currentY = 38;

    // 5. Key Metrics Badges
    if (slide.keyMetrics && slide.keyMetrics.length > 0) {
      const metricCount = slide.keyMetrics.length;
      const gap = 4;
      const availableW = width - 32;
      const cardW = (availableW - (metricCount - 1) * gap) / metricCount;
      const cardH = 20;

      slide.keyMetrics.forEach((m, mIdx) => {
        const xPos = 16 + mIdx * (cardW + gap);
        
        // Card box
        if (isDark) {
          doc.setFillColor(17, 28, 46);
          doc.setDrawColor(30, 41, 59);
        } else {
          doc.setFillColor(255, 255, 255);
          doc.setDrawColor(226, 232, 240);
        }
        doc.setLineWidth(0.3);
        doc.roundedRect(xPos, currentY, cardW, cardH, 2, 2, 'FD');

        // Metric value
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        if (isDark) {
          doc.setTextColor(52, 211, 153);
        } else {
          doc.setTextColor(5, 150, 105);
        }
        doc.text(m.value, xPos + cardW / 2, currentY + 7, { align: 'center' });

        // Metric label
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        if (isDark) {
          doc.setTextColor(226, 232, 240);
        } else {
          doc.setTextColor(30, 41, 59);
        }
        const labelLines = doc.splitTextToSize(m.label, cardW - 4);
        doc.text(labelLines[0] || '', xPos + cardW / 2, currentY + 13, { align: 'center' });

        // Metric change / context
        if (m.change) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(6.5);
          doc.setTextColor(148, 163, 184);
          doc.text(m.change, xPos + cardW / 2, currentY + 17, { align: 'center' });
        }
      });

      currentY += cardH + 6;
    }

    // 6. Bullet Point Cards (2 Columns x 2 Rows)
    const cardGapX = 6;
    const cardGapY = 4;
    const colW = (width - 32 - cardGapX) / 2;
    const cardH = 34;

    slide.bulletPoints.slice(0, 4).forEach((point, pIdx) => {
      const col = pIdx % 2;
      const row = Math.floor(pIdx / 2);
      const xPos = 16 + col * (colW + cardGapX);
      const yPos = currentY + row * (cardH + cardGapY);

      // Card Background
      if (isDark) {
        doc.setFillColor(15, 23, 42);
        doc.setDrawColor(30, 41, 59);
      } else {
        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(226, 232, 240);
      }
      doc.setLineWidth(0.3);
      doc.roundedRect(xPos, yPos, colW, cardH, 2, 2, 'FD');

      // Tag pill
      if (point.tag) {
        if (isDark) {
          doc.setFillColor(16, 185, 129, 0.2);
          doc.setTextColor(110, 231, 183);
        } else {
          doc.setFillColor(209, 250, 229);
          doc.setTextColor(4, 120, 87);
        }
        doc.roundedRect(xPos + 3, yPos + 3, doc.getTextWidth(point.tag) + 4, 5, 1, 1, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.text(point.tag, xPos + 5, yPos + 6.7);
      }

      // Card Heading
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      if (isDark) {
        doc.setTextColor(248, 250, 252);
      } else {
        doc.setTextColor(15, 23, 42);
      }
      const tagOffset = point.tag ? doc.getTextWidth(point.tag) + 8 : 4;
      const maxTitleW = colW - tagOffset - 4;
      const headingLines = doc.splitTextToSize(point.heading, maxTitleW);
      doc.text(headingLines[0] || '', xPos + tagOffset, yPos + 6.7);

      // Card Description
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      if (isDark) {
        doc.setTextColor(148, 163, 184);
      } else {
        doc.setTextColor(71, 85, 105);
      }
      const descLines = doc.splitTextToSize(point.description, colW - 8);
      doc.text(descLines.slice(0, 4), xPos + 4, yPos + 14);
    });

    // 7. Speaker Notes Footer strip (if enabled)
    if (includeSpeakerNotes && slide.speakerNotes) {
      const notesY = height - 19;
      if (isDark) {
        doc.setFillColor(13, 20, 36);
        doc.setDrawColor(30, 41, 59);
      } else {
        doc.setFillColor(241, 245, 249);
        doc.setDrawColor(203, 213, 225);
      }
      doc.setLineWidth(0.2);
      doc.roundedRect(16, notesY, width - 32, 10, 1.5, 1.5, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      if (isDark) {
        doc.setTextColor(245, 158, 11);
      } else {
        doc.setTextColor(180, 83, 9);
      }
      doc.text('PRESENTER SCRIPT:', 19, notesY + 4);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6);
      if (isDark) {
        doc.setTextColor(203, 213, 225);
      } else {
        doc.setTextColor(51, 65, 85);
      }
      const notesLines = doc.splitTextToSize(slide.speakerNotes, width - 65);
      doc.text(notesLines.slice(0, 2), 48, notesY + 4);
    }

    // 8. Bottom Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    if (isDark) {
      doc.setTextColor(100, 116, 139);
    } else {
      doc.setTextColor(148, 163, 184);
    }
    doc.text(`SmartSoil & Crop Care • Lead Researcher & Developer: Ponduri Vinuthna`, 16, height - 5);
    doc.text(`Slide ${idx + 1} of ${PRESENTATION_SLIDES.length}`, width - 16, height - 5, { align: 'right' });
  });

  doc.save('SmartSoil_CropCare_Live_Pitch_Deck.pdf');
}

/**
 * Triggers standard browser print configured for 16:9 landscape slides
 */
export function printPresentation(): void {
  window.print();
}
